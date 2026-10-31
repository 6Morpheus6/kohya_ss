module.exports = {
  run: [{
    method: "shell.run",
    params: {
      message: "git pull"
    }
  }, {
    when: "{{platform !== 'darwin'}}",
    method: "shell.run",
    params: {
      path: "app",
      message: "git pull"
    }
  }, {
    when: "{{platform === 'darwin'}}",
    method: "shell.run",
    params: {
      path: "app",
      message: [
        "git reset --hard",
        "git pull"
      ]
    }
  }, {
    when: "{{platform === 'darwin'}}",
    method: "fs.copy",
    params: {
      src: "requirements_macos_arm64.txt",
      dest: "app/requirements_macos_arm64.txt"
    }
  }, {
    method: "fs.copy",
    params: {
      src: "blip.py",
      dest: "app/sd-scripts/finetune/blip/blip.py"
    }
  }, {
    method: "fs.copy",
    params: {
      src: "tag_images_by_wd14_tagger.py",
      dest: "app/sd-scripts/finetune/tag_images_by_wd14_tagger.py"
    }
  }]
}
