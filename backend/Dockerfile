FROM python:3.11.2-slim-bullseye
ENV PYTHONUNBUFFERED=1
ENV PYTHONDONTWRITEBYTECODE 1

WORKDIR /backend

RUN apt-get update && \
    apt-get install -y --no-install-recommends git
RUN pip install --upgrade pip

RUN pip install --upgrade setuptools

COPY requirements.txt /backend/requirements.txt
RUN pip install -r requirements.txt