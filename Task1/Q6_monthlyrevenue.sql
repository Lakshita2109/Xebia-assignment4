SELECT DATE_FORMAT(order_date, '%b') AS month,
       SUM(amount) AS total_revenue,
       COUNT(*) AS total_orders
FROM Orders
WHERE YEAR(order_date) = 2024
GROUP BY MONTH(order_date),
         DATE_FORMAT(order_date, '%b')
ORDER BY total_revenue DESC;