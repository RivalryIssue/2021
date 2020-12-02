.PHONY: gdoc init fetch dev build

build-prod: export NODE_ENV = production
build-prod: build

gdoc:
	yarn run fetch-doc

src/index.html: gdoc
	yarn run render-html

fetch: src/index.html

auth.json:
	@echo "Do you have your auth.json?"
	exit 1

dev: auth.json fetch
	yarn run dev

build: auth.json fetch
	rm -rf dist/*
	yarn run build
	cp template/404.html dist
	cp template/CNAME dist
	cp template/socialcard.png dist
	cp -r src/images/mi-cover-img dist

push:
	git add .
	git commit -m "$(m)"
	git push -u origin main

gh-pages: build-prod
	yarn deploy
