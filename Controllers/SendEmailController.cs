using Microsoft.AspNetCore.Mvc;
using System;
using raiseTheBarr1.Models;


namespace raiseTheBarr1.Controllers
{
    [Route("/api/sendemail")]
    public class SendEmailController : Controller {
        [HttpPost]
        public IActionResult sendEmail( User user)
        {
                return Ok(user);
        }
    }
}