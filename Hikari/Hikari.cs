using Nancy.Hosting.Self;
using System;
using Hikari.Bootstrap;

namespace Hikari
{
    public static class Hikari
    {
		private static uint PORT = 4831;

        public static void Main(string[] args)
        {
			var config = new HostConfiguration();
			config.UrlReservations.CreateAutomatically = true;
			using (var host = new NancyHost(new NancyBootstrap(), config, new Uri($"http://localhost:{PORT}")))
			{
				host.Start();
				Console.WriteLine($"Running on http://localhost:{PORT}");
				Console.ReadLine();
			}
		}
    }
}
