const sql = require("../config/db");
const bcrypt = require("bcrypt");

const getCatRecData = async (req, res) => {
  const { id } = req.user;
  console.log("token", id);

  try {
    const totalTransType = await sql`SELECT r.transaction_type, SUM(r.amount) 
FROM records r
 INNER JOIN customers c ON r.customer_id=c.id 
WHERE c.id='6368a3f5-e868-46d8-ab18-c8794a3821b9'
GROUP BY r.transaction_type`;
    const dayTrans =
      await sql`SELECT  DATE_TRUNC('day', r.created_at) w, r.transaction_type,
    SUM(r.amount)
    FROM records r 
    INNER JOIN customers c ON r.customer_id=c.id 
    WHERE c.id=${id} 
    GROUP BY
    w, r.transaction_type
    ORDER BY
    w`;
    const weekCategoryTrans = await sql`SELECT 
    DATE_TRUNC('week', r.created_at) AS week,
    cat.name AS cat_name,
    SUM(r.amount) AS total_amount
FROM 
    records r 
INNER JOIN 
    customers c ON r.customer_id = c.id 
INNER JOIN 
    categories cat ON cat.id = r.category_id 
WHERE 
    c.id = ${id} 
GROUP BY 
    week, cat.name`;
    const latestFiveRecords =
      await sql`    SELECT r.name, r.amount, r.transaction_type
    FROM records r 
    INNER JOIN customers c ON r.customer_id=c.id 
    WHERE c.id=${id} 
      ORDER BY
  r.created_at
    LIMIT 
    5`;

    res
      .status(200)
      .json({ totalTransType, dayTrans, weekCategoryTrans, latestFiveRecords });
  } catch (error) {
    res.status(400).json({ error });
  }
};
module.exports = { getCatRecData };
