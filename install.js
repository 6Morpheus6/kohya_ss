module.exports = {
  run: [
    // Edit this step to customize the git repository to use
    {
      method: "shell.run",
      params: {
        message: [
          "git clone https://github.com/bmaltais/kohya_ss app",
        ]
      }
    },
    // Delete this step if your project does not use torch
    {
      method: "script.start",
      params: {
        uri: "torch.js",
        params: {
          path: "app",                // Edit this to customize the path to start the shell from
          venv: "venv",                // Edit this to customize the venv folder path
           xformers: true   // uncomment this line if your project requires xformers
        }
      }
    },
    // Edit this step with your custom install commands
    {
      method: "shell.run",
      params: {
        path: "app",                // Edit this to customize the path to start the shell from
        message: [
          "pip install gradio devicetorch",
          "{{os.platform() === 'win32' ? 'echo 1 | setup.bat' : 'echo 1 | chmod +x ./setup.sh && ./setup.sh'}}"
        ]
      }
    },
  ]
}
