resource "aws_instance" "instance" {
  ami                    = var.aws_ami
  instance_type          = var.instance_type
  user_data              = file("user-data.sh")
  vpc_security_group_ids = [aws_security_group.securitygroup.id]

  iam_instance_profile = "acesso-ssm-horadoqa" 

  root_block_device {
    volume_size = 20  # Tamanho do volume em GB
    volume_type = "gp2"  # Tipo do volume (pode ser alterado conforme necessário)
  }

  tags = {
    Name    = "horadoqa-dev"
    Project = "Criando instancias com user-data"
  }
}

