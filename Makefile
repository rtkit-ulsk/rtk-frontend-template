dev:
	docker-compose -f docker-compose.dev.yml up
sh:
	docker-compose -f docker-compose.dev.yml exec web sh
prod:
	docker-compose up -d
