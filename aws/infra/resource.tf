resource "aws_instance" "fe" {
  count = var.number_instances
  ami = "ami-0ae8f15ae66fe8cda"
  instance_type = "t3.micro"
  user_data = file("data/fe.sh")
  vpc_security_group_ids = [aws_security_group.securitygroup.id]
  key_name = aws_key_pair.keypair.key_name
  tags = {
    Name    = "fe-instance-${count.index}"
    Project = "Hora do QA"
  }
}

resource "aws_instance" "be" {
  count = var.number_instances
  ami = "ami-0ae8f15ae66fe8cda"
  instance_type = "t3.micro"
  user_data = file("data/be.sh")
  vpc_security_group_ids = [aws_security_group.securitygroup.id]
  key_name = aws_key_pair.keypair.key_name
  associate_public_ip_address = false
  tags = {
    Name    = "be-instance-${count.index}"
    Project = "Hora do QA"
  }
}

resource "aws_instance" "mongodb" {
  count = var.number_instances
  ami = "ami-0ae8f15ae66fe8cda"
  instance_type = "t3.micro"
  user_data = file("data/mongo.sh")
  vpc_security_group_ids = [aws_security_group.securitygroup.id]
  key_name = aws_key_pair.keypair.key_name
  associate_public_ip_address = false
  tags = {
    Name    = "mongodb-instance-${count.index}"
    Project = "Hora do QA"
  }
}

resource "aws_key_pair" "keypair" {
  key_name   = "aws-instance-key"
  public_key = file("~/.ssh/id_rsa.pub")
}