class apache {
  exec { 'apt-get update':
    command => '/usr/bin/apt-get update'
  }

  package { "apache2":
    ensure => present,
  }

  service { "apache2":
    ensure => running,
    require => Package["apache2"],
  }
  
  exec { "/usr/sbin/a2enmod headers":
    unless => "/bin/ls /etc/apache2/mods-enabled/header*",
    require => Package["apache2"],
    notify  => Service["apache2"],
  }
  
  exec { "allow-override":
    unless => "/bin/sed -n '11 p' /etc/apache2/sites-available/default | /bin/grep 'AllowOverride All'",
    command => "/bin/sed -i '11 s/None/All/' /etc/apache2/sites-available/default",
    notify  => Service["apache2"],
    require => Package["apache2"],
  }
}

include apache