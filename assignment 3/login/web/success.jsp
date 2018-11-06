<%-- 
    Document   : success
    Created on : Nov 4, 2018, 9:31:29 PM
    Author     : jackie
--%>

<%@page contentType="text/html" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
    <head>
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
        <title>Welcome</title>
        <jsp:useBean id="user" class="mbs.Userbean" scope="session" />
    </head>
    <body>
        <h2>
            Welcome
            <jsp:getProperty name="user" property="username" />
        </h2>
        <p>
            <jsp:getProperty name="user" property="status" />
        </p>
    </body>
</html>
