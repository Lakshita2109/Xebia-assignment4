def get_monthly_attendance(conn, employee_id, month, year):
    query = """
        SELECT a.date, a.check_in, a.check_out, e.name
        FROM attendance a

        -- Fix: Use INNER JOIN so only matching employees are returned.
        INNER JOIN employees e
        ON a.employee_id = e.id

        WHERE a.month = ?
        AND a.year = ?

        -- Fix: Filter records for the specified employee.
        AND a.employee_id = ?

        ORDER BY a.date ASC
    """

    cursor = conn.cursor()

    # Fix: Pass employee_id parameter to match the added filter.
    cursor.execute(query, (month, year, employee_id))

    return cursor.fetchall()