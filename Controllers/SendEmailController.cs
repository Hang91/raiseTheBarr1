using System;
using System.Collections.Generic;  
using System.Linq;  
using System.Net.Mail;  
using System.Web;  
using Microsoft.AspNetCore.Mvc;
using raiseTheBarr1.Models;
using System.Net.Mail;
using System.Net;
using System.Web;

namespace raiseTheBarr1.Controllers
{

    public class SendEmailController : Controller {

        [HttpPost("/api/sendemailfordemo")]
        public IActionResult sendEmailForDemo( [FromBody]raiseTheBarr1.Models.User user)
        {
                MailAddress sender_mail = new MailAddress("infoweraisethebarr@gmail.com");//enter sender's email
                //send to manager (Raise the Barr)
                MailMessage mail = new MailMessage();  
                mail.To.Add("zeina@weraisethebarr.com");//enter manager official email
                mail.From = sender_mail;
                mail.Subject = "Request email from user";  
                mail.Body = "A new user request a demo, user's email address is " + user.email + ". User name is " + user.firstname;
                mail.IsBodyHtml = false;  
                //send to client (user)
                MailMessage client_mail = new MailMessage(); 
                client_mail.To.Add(user.email);  
                client_mail.From = sender_mail; 
                client_mail.Subject = "do-not-reply Request Confirmation";  
                client_mail.Body = "Hello " + user.firstname + ", \n\nYou have requested a demo. We'll contact you soon.\n\nBest,\nRaise the Barr";  
                client_mail.IsBodyHtml = false;

                //sender
                SmtpClient smtp = new SmtpClient();

                smtp.Host = "smtp.gmail.com";
                smtp.Port = 587;  
                smtp.UseDefaultCredentials = false;  
                smtp.Credentials = new System.Net.NetworkCredential("infoweraisethebarr@gmail.com", "1229HomepageTeam!"); // Enter senders email and password 
                smtp.EnableSsl = true;
                smtp.Send(mail);
                smtp.Send(client_mail);  
                return Ok(user);  
        }


        [HttpPost("/api/sendemailforbeta")]
        public IActionResult sendEmailForBeta( [FromBody]raiseTheBarr1.Models.User user)
        {
                MailAddress sender_mail = new MailAddress("infoweraisethebarr@gmail.com");//enter sender's email
                //send to manager (Raise the Barr)
                MailMessage mail = new MailMessage();  
                mail.To.Add("zeina@weraisethebarr.com");//enter manager official email
                mail.From = sender_mail;
                mail.Subject = "Beta request from user";  
                mail.Body = "A new user request a beta, user's email address is " + user.email + ". User name is " + user.firstname;  
                mail.IsBodyHtml = false;  
                //send to client (user)
                MailMessage client_mail = new MailMessage(); 
                client_mail.To.Add(user.email);  
                client_mail.From = sender_mail; 
                client_mail.Subject = "do-not-reply Request Confirmation";  
                client_mail.Body = "Hello " + user.firstname + ", \n\nYou have requested a beta version of our product. We'll contact you soon.\n\nBest,\nRaise the Barr";  
                client_mail.IsBodyHtml = false;

                //sender
                SmtpClient smtp = new SmtpClient();

                smtp.Host = "smtp.gmail.com";
                smtp.Port = 587;  
                smtp.UseDefaultCredentials = false;  
                smtp.Credentials = new System.Net.NetworkCredential("infoweraisethebarr@gmail.com", "1229HomepageTeam!"); // Enter senders email and password 
                smtp.EnableSsl = true;
                smtp.Send(mail);
                smtp.Send(client_mail);  
                return Ok(user);  
        }
    }
}