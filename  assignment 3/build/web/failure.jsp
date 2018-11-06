
<%@page contentType="text/html" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
    <head>
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
        <title>LoginFailure</title>
    </head>
    <body>
        <jsp:useBean id="user" class="mbs.Userbean" scope="session" />
        <h3><jsp:getProperty name="user" property="status" /></h3>
    </body>
</html>
