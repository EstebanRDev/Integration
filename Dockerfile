# Usa la imagen base de Ubuntu
FROM ubuntu:latest

# Instala Nginx
RUN apt-get update && apt-get install -y nginx

# Elimina el archivo de configuración predeterminado de Nginx
RUN rm /etc/nginx/sites-enabled/default

# Copia la configuración personalizada de Nginx
COPY nginx.conf /etc/nginx/sites-enabled/

# Copia el contenido del proyecto al directorio web de Nginx
COPY . /var/www/html

# Exponer el puerto 80
EXPOSE 80

# Comando para ejecutar Nginx en primer plano
CMD ["nginx", "-g", "daemon off;"]
