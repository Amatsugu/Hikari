using Nancy;
using System;
using System.Collections.Generic;
using System.Text;

namespace Hikari.Modules
{
    public class IndexModule : NancyModule
    {
		public IndexModule()
		{
			Get("/", _ =>
			{
				return View["index"];
			});
		}
    }
}
