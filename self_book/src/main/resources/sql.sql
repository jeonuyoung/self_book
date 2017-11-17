
create table member(
  id varchar(80) primary key unique,
  pw varchar(20) not null, 
  nickname varchar(40) not null,
  reg_date datetime not null,
  log_date datetime not null,
  approval_status varchar(10) not null,
  approval_key varchar(10)
)
DEFAULT CHARACTER SET utf8mb4
DEFAULT COLLATE utf8mb4_unicode_ci;


