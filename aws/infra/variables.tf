variable "number_instances" {
  type        = number
  description = "Numero de instancias"
  default     = 1
}

variable "aws_region" {
  type = string
  default     = "us-east-1"
  description = "Região onde será criada a instância"
}

variable "aws_profile" {
  type = string
  default     = "terraform"
  description = "Profile do terraform que está sendo utilizado"
}