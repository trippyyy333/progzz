from pyvista import examples
grid = examples.fox(3, 2, -2)
grid.plot(volume=True, opacity=[1, 0, 1], cmap='magma')