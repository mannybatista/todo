create database if not exists todo;
use todo;

create table if not exists lists 
(
id int not null primary key,
name varchar(255) not null
);

create table if not exists task 
(
id int not null primary key,
listId int not null,
name varchar(255) not null,
completed bool,
archived bool 
);

insert into lists values(0, 'My Todo List');

insert into task values(0, 0, 'This is my first task!', 0, 1);
insert into task values(1, 0, 'This is my second task!', 1, 0);