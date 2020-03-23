FROM ruby:2.7.0 AS Backend

# Avoid warnings by switching to noninteractive
ENV DEBIAN_FRONTEND=noninteractive

WORKDIR /usr/src/app

# Configure apt and install packages
RUN apt-get update \
  && apt-get -y install --no-install-recommends apt-utils dialog 2>&1 \
  #
  # Install rails and bundler
  && gem install rails bundler \
  #
  # Install Node.js
  && curl -sL https://deb.nodesource.com/setup_13.x | bash - \
  && apt-get install -y nodejs \
  #
  # Clean up
  && apt-get autoremove -y \
  && apt-get clean -y \
  && rm -rf /var/lib/apt/lists/*

# Install Rails dependencies
COPY Gemfile /usr/src/app/Gemfile
COPY Gemfile.lock /usr/src/app/Gemfile.lock
RUN bundle install

# Install React dependencies
COPY client/package.json /usr/src/app/client/package.json
COPY client/package-lock.json /usr/src/app/client/package-lock.json
RUN cd /usr/src/app/client/ \
  #
  # Install front-end dependencies
  && npm install

# Install the code
COPY . /usr/src/app

# Switch back to dialog for any ad-hoc use of apt-get
ENV DEBIAN_FRONTEND=
