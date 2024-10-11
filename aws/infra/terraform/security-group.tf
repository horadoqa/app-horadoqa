resource "aws_security_group" "securitygroup" {
  name        = "horadoqa-dev"
  description = "Allow HTTP, SSH, and internet access"

  ingress {
    from_port   = 80
    to_port     = 80
    protocol    = "tcp"
    cidr_blocks = ["0.0.0.0/0"]
  }

  ingress {
    from_port   = 5000
    to_port     = 5000
    protocol    = "tcp"
    cidr_blocks = ["0.0.0.0/0"]
  }

  egress {
    from_port   = 0
    to_port     = 0
    protocol    = "-1"  # Permite todo o tráfego
    cidr_blocks = ["0.0.0.0/0"]
  }
}
