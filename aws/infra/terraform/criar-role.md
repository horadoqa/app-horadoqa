resource "aws_instance" "instance" {

  ami                    = var.aws_ami
  instance_type          = var.instance_type
  user_data              = file("user-data.sh")
  vpc_security_group_ids = [aws_security_group.securitygroup.id]
   iam_instance_profile   = aws_iam_instance_profile.acesso_ssm_horadoqa.name

  tags = {
    Name    = "horadoqa-dev"
    Project = "Criando instancias com user-data"
  }
}

resource "aws_iam_role" "acesso_ssm_horadoqa" {
  name = "acesso-ssm-horadoqa"

  assume_role_policy = jsonencode({
    Version = "2012-10-17"
    Statement = [
      {
        Action    = "sts:AssumeRole"
        Effect    = "Allow"
        Principal = {
          Service = "ec2.amazonaws.com"
        }
      }
    ]
  })
}

resource "aws_iam_role_policy_attachment" "ssm_attachment" {
  role       = aws_iam_role.acesso_ssm_horadoqa.name
  policy_arn = "arn:aws:iam::aws:policy/AmazonSSMManagedInstanceCore"
}

resource "aws_iam_instance_profile" "acesso_ssm_horadoqa" {
  name = "acesso-ssm-horadoqa"
  role = aws_iam_role.acesso_ssm_horadoqa.name
}

o usuário que você está usando para executar o Terraform não tem as permissões necessárias para criar uma role IAM. Para resolver isso, você pode seguir os seguintes passos:

1. Verifique as Permissões do Usuário
Acesse o Console da AWS e navegue até o IAM (Identity and Access Management).
Localize o usuário horadoqa-dev e verifique as políticas associadas a ele.
Você precisará de uma política que permita a criação de roles IAM, especificamente a permissão iam:CreateRole.
2. Adicione Permissões Necessárias
Se o usuário não tiver as permissões necessárias, você pode adicionar uma política como a seguinte:

json
Copiar código
{
  "Version": "2012-10-17",
  "Statement": [
    {
      "Effect": "Allow",
      "Action": [
        "iam:CreateRole",
        "iam:AttachRolePolicy",
        "iam:PutRolePolicy",
        "iam:DeleteRole",
        "iam:DetachRolePolicy"
      ],
      "Resource": "*"
    }
  ]
}
3. Aplicando a Política
No console do IAM, vá até Policies (Políticas) e clique em Create policy (Criar política).
Selecione a opção JSON e cole a política acima.
Dê um nome e uma descrição à política e clique em Create policy.
Depois, vincule essa política ao seu usuário horadoqa-dev.
4. Verifique se as Mudanças Foram Aplicadas
Depois de atualizar as permissões:

Faça logout e login novamente no console da AWS ou no terminal.
Tente executar o comando do Terraform novamente.
5. Considerações de Segurança
Minimize permissões: Após criar a role e suas políticas, considere restringir as permissões a apenas o que é necessário para o usuário.
Políticas Baseadas em Identidade: Considere usar políticas baseadas em identidade mais específicas para limitar as ações permitidas.