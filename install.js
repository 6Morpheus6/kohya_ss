module.exports = {
  run: [{
    method: "shell.run",
    params: {
      message: [
        "git clone https://github.com/bmaltais/kohya_ss app",
      ]
    }
  }, {
    method: "script.start",
    params: {
      uri: "torch.js",
      params: {
        path: "app",
        venv: "venv",
//        xformers: true
      }
    }
  }, {
   method: "shell.run",
   params: {
    path: "app",
     message:[ "{{os.platform() === 'win32' ? 'setup.bat --torch2' : 'bash setup.sh'}}"
    ]
    }
  },{
    method: "fs.link",
    params: {
      venv: "app/venv"
    }
  }, {
    method: "notify",
    params: {
      html: "Click the 'start' tab to get started!"
    }
  }]
}
