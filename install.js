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
    {
      method: "shell.run",
      params: {
        path: "app",
        venv: "venv",
        message: [
          "uv pip install gradio devicetorch",
          "python setup/setup_windows.py --headless"
        ]
      }
    },
    {
      method: "script.start",
      params: {
        uri: "torch.js",
        params: {
          path: "app",
          venv: "venv",
           xformers: true
        }
      }
    },
    {
      method: "notify",
      params: {
        html: "Installation successful!"
      }
    }
  ]
}
