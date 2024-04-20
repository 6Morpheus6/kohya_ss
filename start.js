module.exports = {
  daemon: true,
  run: [{
    method: "shell.run",
    params: {
      path: "app",
      venv: "venv",
      env: { },
      message: [
        "{{os.platform() === 'win32' ? 'gui.bat' : 'bash gui.sh'}} --listen 127.0.0.1 --inbrowser"
      ],
      on: [{ "event": "/http:\/\/[0-9.:]+/", "done": true }]
    }
  }, {
    method: "local.set",
    params: {
      url: "{{input.event[0]}}"
    }
  }, {
    method: "proxy.start",
    params: {
      uri: "{{local.url}}",
      name: "Local Sharing"
    }
  }]
}
