FROM jupyter/scipy-notebook:lab-3.1.13

RUN pip install --upgrade jupyterlab jupyterlab-git

ARG CACHEBUST=1 
RUN echo "$CACHEBUST"

RUN wget https://circleci.com/api/v1.1/project/github/TheOnlyCryptoParadise/crypto_package/latest/artifacts/0/dist/crypto_package-0.0.1-py3-none-any.whl 

RUN python -m pip install crypto_package-0.0.1-py3-none-any.whl

COPY mounts/.jupyter/* /home/jovyan/.jupyter/
