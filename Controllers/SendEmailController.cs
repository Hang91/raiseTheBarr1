using Microsoft.AspNetCore.Mvc;
using System;
using raiseTheBarr1.Models;
using System.Net.Mail;
using System.Net;
using System.Web;

namespace raiseTheBarr1.Controllers
{
    [Route("/api/sendemail")]
    public class SendEmailController : Controller {
        [HttpPost]  
        public IActionResult sendEmail([FromBody] User user)
        {   

            MailMessage mail = new MailMessage();  
            mail.To.Add("jinhang91@hotmail.com");  
            mail.From = new MailAddress("jh910621@gmail.com");  
            mail.Subject = "Test from Raise The Barr";  
            mail.Body = "A new user request a demo, his email address is " + user.email;  
            mail.IsBodyHtml = false;  
            SmtpClient smtp = new SmtpClient();  
            smtp.Host = "smtp.gmail.com";
            smtp.Port = 587;  
            smtp.UseDefaultCredentials = false;  
            smtp.Credentials = new System.Net.NetworkCredential("jh910621@gmail.com", "ZhuGoJin!110"); // Enter senders User name and password  
            smtp.EnableSsl = true;
            smtp.Send(mail);  
            return Ok(user);


            // SmtpClient smtpClient = new SmtpClient("smtp.gmail.com");

            // smtpClient.Port = 587;
            // smtpClient.Credentials = new System.Net.NetworkCredential("jh910621@gmail.com", "ZhuGoJin!110");
            // smtpClient.UseDefaultCredentials = false;
            // smtpClient.DeliveryMethod = SmtpDeliveryMethod.Network;
            // smtpClient.EnableSsl = true;
            // MailMessage mail = new MailMessage();

            // //Setting From , To and CC
            // mail.From = new MailAddress("jh910621@gmail.com");
            // mail.To.Add(new MailAddress("jinhang91@hotmail.com"));
            // mail.Subject = "Test Email";
            // mail.Body = "Thank you.";
            // // mail.CC.Add(new MailAddress("MyEmailID@gmail.com"));

            // smtpClient.Send(mail);
            // return Ok(user);
        }
    }
}