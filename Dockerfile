FROM jupyter/scipy-notebook:lab-3.1.13

RUN pip install --upgrade jupyterlab jupyterlab-git

COPY mounts/.jupyter/* /home/jovyan/.jupyter/
