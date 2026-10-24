module.exports = {
  requires: {
    bundle: "ai",
  },
  run: [
    {
      method: "shell.run",
      params: {
        message: [
          "git clone https://github.com/bmaltais/kohya_ss app",
        ]
      }
    },
    {
      when: "{{platform === 'win32'}}",
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
      when: "{{platform === 'linux' && gpu === 'nvidia'}}",
      method: "shell.run",
      params: {
        path: "app",
        venv: "venv",
        message: [
          "uv pip install gradio devicetorch",
          "python setup/setup_linux.py --platform-requirements-file=requirements_linux.txt"
        ]
      }
    },
    {
      when: "{{platform === 'linux' && gpu === 'amd'}}",
      method: "shell.run",
      params: {
        path: "app",
        venv: "venv",
        message: [
          "uv pip install gradio devicetorch",
          "python setup/setup_linux.py --platform-requirements-file=requirements_linux_rocm.txt"
        ]
      }
    },
    {
      when: "{{platform === 'darwin'}}",
      method: "shell.run",
      params: {
        path: "app",
        venv: "venv",
        message: [
          "uv pip install gradio devicetorch",
          "python setup/setup_linux.py --platform-requirements-file=requirements_macos_amd64.txt"
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
      method: "fs.copy",
      params: {
        src: "blip.py",
        dest: "app/sd-scripts/finetune/blip/blip.py"
      }
    },
    {
      method: "fs.copy",
      params: {
        src: "tag_images_by_wd14_tagger.py",
        dest: "app/sd-scripts/finetune/tag_images_by_wd14_tagger.py"
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
