


<%@page contentType="text/html" pageEncoding="UTF-8"%>
<!DOCTYPE html>

<html lang="en"> 

    <head>
        <!-- Required meta tags -->
        <meta http-equiv="Content-Type" content="text/html; charset=utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
        <meta name="viewport" content="width=device-width, initial-scale=1.0, shrink-to-fit=no">
        <title>Login</title>

        <!-- Bootstrap CSS -->
        <link href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-MCw98/SFnGE8fJT3GXwEOngsV7Zt27NXFoaoApmYm81iuXoPkFOJwJ8ERdknLPMO" crossorigin="anonymous">

        <!-- Other CSS -->
        <link rel="stylesheet" type="text/css" href="css/index.css">

        <jsp:useBean id="user" class="mbs.Userbean" scope="session" />
    </head>
    
    <body>
        <div class="container">
            <div class="mx-auto"  >
               <h1 >Userlogin</h1>  
            </div>
        </div>
        
        <div class="container" >
        <form method = "POST" action="LoginServlet" id="loginform">
            <input type="hidden" name="log" />
            <div class="form-group row">
                <label for="inputUsername" class="col-sm-2 col-form-label">Username</label>
                <div class="col-sm-5">
                    <input type="text" class="form-control-plaintext" name="username" id="username" placeholder="Username">
                </div>
            </div>
            <div class="form-group row">
                <label for="inputPassword" class="col-sm-2 col-form-label">Password</label>
                <div class="col-sm-5">
                    <input type="password" class="form-control" name="password" id="password" placeholder="Password">
                </div>
            </div>  
            <div class="form-group row">
                <div >
                <input class="btn btn-primary" type="submit" value="Submit" name="Submit" />
                </div>
            </div>
        </form>
        </div>
    </body>
</html>
