create table abc ( id integer primary key );

create table bcd ( id integer primary key, first name varchar(50) );

create table cde ( id integer primary key, first name varchar(50), dob date not null );

CREATE TABLE DEF ( id integer primary key, first name varchar(50), dob date not null );

create TABLE EfG( id integer primary key, first name varchar(50), dob date not null );

// comments should be ignored
create table fgh ( id integer primary key, first name varchar(50), dob date not null );

// without semi colon
create table ghi ( id integer primary key, first name varchar(50), dob date not null )
