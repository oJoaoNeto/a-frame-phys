//tirei do direto da docs do aframe na aba 3d models
AFRAME.registerComponent('color-model', {
    schema: { type: 'color', default: '#FFFFFF' },
    init: function () {
      const el = this.el;
      const color = this.data;

      el.addEventListener('model-loaded', () => {
        const model = el.getObject3D('mesh');
        if (model) {
          model.traverse((node) => {
            if (node.isMesh) {
              node.material.color.set(color);
            }
          });
        }
      });
    }
  });