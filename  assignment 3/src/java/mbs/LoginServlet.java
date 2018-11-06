package mbs;

/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

import java.io.IOException;
import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Statement;
import javax.servlet.RequestDispatcher;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;




public class LoginServlet extends HttpServlet { 
    
    private Connection conn;
    private Statement st;
   
    /**
     * Processes requests for both HTTP <code>GET</code> and <code>POST</code>
     * methods.
     *
     * @param request servlet request
     * @param response servlet response
     * @throws ServletException if a servlet-specific error occurs
     * @throws IOException if an I/O error occurs
     */
   


    protected void processRequest(HttpServletRequest request, HttpServletResponse response) 
    throws ServletException, IOException {
        
        //get username and password
        String username = request.getParameter("username");
        String password = request.getParameter("password");
        
        HttpSession session=request.getSession(true);
        Userbean user = new Userbean();
        session.setAttribute("user",user);
        user.setUsername(username);
        user.setPassword(password);
        if (username != null){
            if(LoginCheck(username,password)){
                user.setStatus("LOGIN SUCCESS");
                RequestDispatcher rd = getServletContext().getRequestDispatcher("/success.jsp");
                rd.forward(request, response);
            }
            else{
                user.setStatus("LOGIN FAILURE, PLEASE INPUT THE RIGHT INFO ");
                RequestDispatcher rd = getServletContext().getRequestDispatcher("/failure.jsp");
                rd.forward(request, response);
            }
        }
    }
    //login check 
    private boolean LoginCheck(String username,String password) {
        String url = "jdbc:derby://localhost:1527/userinfo";
        try {
            Connection conn = DriverManager.getConnection(url,"admin2560","2560");//connect database
            String sql = "select * from login";//SQL 
            Statement st = conn.createStatement();
            ResultSet rs = null;
            rs = st.executeQuery(sql);
            while(rs.next()){
                String usernameInDB = rs.getString("username"); //compare with the database
                String passwordeInDB = rs.getString("password");
                if (usernameInDB.equals(username)&&passwordeInDB.equals(password)){ //equal
                    return true;
                }      
            }
            rs.close();
            st.close();
            conn.close();
        } catch (SQLException ex) {
            System.out.println("Connect failed !"); //return fail
        }        
        return false;
    }


    // <editor-fold defaultstate="collapsed" desc="HttpServlet methods. Click on the + sign on the left to edit the code.">
    /**
     * Handles the HTTP <code>GET</code> method.
     *
     * @param request servlet request
     * @param response servlet response
     * @throws ServletException if a servlet-specific error occurs
     * @throws IOException if an I/O error occurs
     */
    @Override
    protected void doGet(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
        processRequest(request, response);
    }

    /**
     * Handles the HTTP <code>POST</code> method.
     *
     * @param request servlet request
     * @param response servlet response
     * @throws ServletException if a servlet-specific error occurs
     * @throws IOException if an I/O error occurs
     */
    @Override
    protected void doPost(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
        processRequest(request, response);
    }

    /**
     * Returns a short description of the servlet.
     *
     * @return a String containing servlet description
     */
    @Override
    public String getServletInfo() {
        return "Short description";
    }// </editor-fold>

}


