FROM jupyter/scipy-notebook:lab-3.1.13

USER root
RUN apt update && apt install -y gcc make

RUN wget http://prdownloads.sourceforge.net/ta-lib/ta-lib-0.4.0-src.tar.gz && tar -xzf ta-lib-0.4.0-src.tar.gz # FIXME
RUN cd ta-lib/ && ./configure --prefix=/usr && make && make install #FIXME

USER jovyan

RUN pip install TA_Lib==0.4.21 technical==1.3.0

RUN pip install --upgrade jupyterlab jupyterlab-git

ARG CACHEBUST=1 
RUN echo "$CACHEBUST"

# FIXME
RUN wget https://circleci.com/api/v1.1/project/github/TheOnlyCryptoParadise/crypto_package/latest/artifacts/0/dist/crypto_package_fake_bot-0.0.1-py3-none-any.whl 

# FIXME
RUN mv crypto_package_fake_bot-0.0.1-py3-none-any.whl crypto_package-0.0.1-py3-none-any.whl && python -m pip install crypto_package-0.0.1-py3-none-any.whl

COPY mounts/.jupyter/* /home/jovyan/.jupyter/
COPY ./work /home/jovyan/work
