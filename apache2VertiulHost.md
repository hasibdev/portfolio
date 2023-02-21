## How to create an Apache2 virtual host server block in Ubuntu 22.04
1. First, create a new configuration file in the sites-available directory:
```bash
sudo nano /etc/apache2/sites-available/mail.test.conf
```

2. In this file, add the following configuration block:
```bash
<VirtualHost *:80>
    ServerName mail.test
    ServerAlias www.mail.test
    
    ProxyPreserveHost On
    ProxyPass / http://localhost:8025/
    ProxyPassReverse / http://localhost:8025/
    
    ErrorLog ${APACHE_LOG_DIR}/mail.test_error.log
    CustomLog ${APACHE_LOG_DIR}/mail.test_access.log combined
</VirtualHost>
```
This block configures Apache to listen on port 80 for requests to the mail.test domain and proxies those requests to the Mailhog server running on localhost:8025.

3. Save and exit the file (Ctrl + X, Y, Enter).
4. Next, enable the new virtual host configuration by creating a symlink in the sites-enabled directory:
```bash
sudo ln -s /etc/apache2/sites-available/mail.test.conf /etc/apache2/sites-enabled/
```

5. Reload the Apache service for the changes to take effect:
```bash
sudo systemctl reload apache2
```

6. Finally, add an entry to your local hosts file to map the mail.test domain to your local IP address:
```bash
sudo nano /etc/hosts
```
Add the following line at the end of the file:

```bash
127.0.0.1 mail.test
```
Save and exit the file (Ctrl + X, Y, Enter).

You should now be able to access Mailhog by visiting http://mail.test in your web browser.

If you get this error:
```bash
Invalid command 'ProxyPreserveHost', perhaps misspelled or defined by a module not included in the server configuration
```
To fix this issue, you need to load the "proxy" module and its dependencies. You can do this by running the following command:

```bash
sudo a2enmod proxy proxy_http
```

This command will enable the necessary Apache modules for proxying HTTP requests.

After running this command, you should restart the Apache service to ensure that the new modules are loaded:

```bash
sudo systemctl restart apache2
```

Now you can check whether the error has been resolved by accessing the "mail.test" domain in your web browser. If you still encounter an error, you may need to check the Apache error log for further details:

```
sudo tail -f /var/log/apache2/error.log
```

This command will display the last few lines of the Apache error log in real-time, allowing you to troubleshoot any issues that may arise.


