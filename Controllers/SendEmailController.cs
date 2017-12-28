using System;
using System.Collections.Generic;  
using System.Linq;  
using System.Net.Mail;  
using System.Web;  
using Microsoft.AspNetCore.Mvc;
using raiseTheBarr1.Models;


namespace raiseTheBarr1.Controllers
{
    [Route("/api/sendemail")]
    public class SendEmailController : Controller {
        [HttpPost]
        public IActionResult sendEmail( [FromBody]raiseTheBarr1.Models.User user)
        {
                MailAddress sender_mail = new MailAddress("sender_mail");//enter sender's email
                //send to manager (Raise the Barr)
                MailMessage mail = new MailMessage();  
                mail.To.Add("manager_email");//enter manager official email
                mail.From = sender_mail;
                mail.Subject = "Test from Raise The Barr";  
                mail.Body = "A new user request a demo, his email address is " + user.email;  
                mail.IsBodyHtml = false;  
                //send to client (user)
                MailMessage client_mail = new MailMessage(); 
                client_mail.To.Add(user.email);  
                client_mail.From = sender_mail; 
                client_mail.Subject = "Response from Raise The Barr";  
                client_mail.Body = "Hello " + user.firstname + ", \n\nThanks for your request. We'll reply you soon.\n\nBest,\nRaise the Barr";  
                client_mail.IsBodyHtml = false;

                //sender
                SmtpClient smtp = new SmtpClient();  
                // smtp.Host = "smtp.126.com"; 
                // smtp.Port = 465; 
                // smtp.UseDefaultCredentials = false;  
                // smtp.Credentials = new System.Net.NetworkCredential("zhuyingcau@126.com", "98437126"); // Enter senders User name and password  
                
                // smtp.Host = "smtp.qq.com";
                // smtp.Port = 587;  
                // smtp.UseDefaultCredentials = false;  
                // smtp.Credentials = new System.Net.NetworkCredential("891796378@qq.com", "qq98437"); // Enter senders User name and password  
                

                smtp.Host = "smtp.gmail.com";
                smtp.Port = 587;  
                smtp.UseDefaultCredentials = false;  
                smtp.Credentials = new System.Net.NetworkCredential("sender_mail", "password"); // Enter senders email and password 
                smtp.EnableSsl = true;
                smtp.Send(mail);
                smtp.Send(client_mail);  
                return Ok(user);  
            
        }
    }
}