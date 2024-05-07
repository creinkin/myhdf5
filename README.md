# myHDF5

myHDF5 is a **free online service to explore and visualize HDF5 files**.

Users can choose to select files from their local machine, or to load files that
are hosted remotely on platforms such as GitHub or Zenodo.

myHDF5 is based on [H5Web](https://github.com/silx-kit/h5web), an HDF5 file
viewer and visualisation component library built with React and WebGL, as well
as [h5wasm](https://github.com/usnistgov/h5wasm), a WebAssembly-powered library
for reading HDF5 files from JavaScript.

![Demo GIF](demo.gif)

### Running a Local Version with Docker

Per the [official Docker website](https://docs.docker.com/get-started/overview/), "Docker is an open platform for developing, shipping, and running applications. Docker enables you to separate your applications from your infrastructure so you can deliver software quickly. With Docker, you can manage your infrastructure in the same ways you manage your applications. By taking advantage of Docker's methodologies for shipping, testing, and deploying code, you can significantly reduce the delay between writing code and running it in production."

Docker can be used to rapidly start the development Vite server used to serve myhdf5

**Prerequisite**: Install [Docker Desktop](https://www.docker.com/products/docker-desktop/)

1. From the root project directory, build the docker container with `docker build -t myhdf5:latest .`
2. Start the container with the following command: `docker run --rm -it -p 127.0.0.1:8080:8080 myhdf5:latest`
   * `--rm` will ensure the container is cleaned up after it is shut down.
   * `-it` starts the command with an interactive terminal to allow for Ctrl+C to shut down the myhdf5 service.
   * `-p 127.0.0.1:8080:8080` maps the web service port from the host machine into the container, but does not open the port beyond the user's machine.
3. The myhdf5 website should be available at `http://127.0.0.1:8080` in your web browser.
4. Use Ctrl+C in the terminal window that ran the `docker run` command in order to stop the myhdf5 container.
