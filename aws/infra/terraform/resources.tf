resource "aws_instance" "instance" {
  ami                    = var.aws_ami
  instance_type          = var.instance_type
  user_data              = file("user-data.sh")
  vpc_security_group_ids = [aws_security_group.securitygroup.id]

  iam_instance_profile = "acesso-ssm-horadoqa" 
  
  tags = {
    Name    = "horadoqa-dev"
    Project = "Criando instancias com user-data"
  }
}
