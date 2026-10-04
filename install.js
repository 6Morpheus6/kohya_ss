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
