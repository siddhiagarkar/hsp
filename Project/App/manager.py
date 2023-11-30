from django.contrib.auth.base_user import BaseUserManager

class CustomUserManager(BaseUserManager):
    # use_in_migrations=True
    def create_user(self, email, phone, name, password=None, **extra_fields):
        if not email:
            raise ValueError("Users must have an email address")
        if not name:
            raise ValueError("Users must have a name")
        if not phone:
            raise ValueError("Users must have a phone number")
        
        extra_fields['email'] = self.normalize_email(extra_fields['email'])

        user = self.model(
            email=email,
            phone=phone,
            name=name,
            **extra_fields
        )

        user.set_password(password)
        user.save(using=self.db)

        return user

    def create_superuser(self, email, phone, name, password=None, **extra_fields):
        user.is_active = True
        user.is_staff = True
        user.is_superuser = True
        # user.save(using=self._db)

        user = self.create_user(
            email=self.normalize_email(email),
            password=password,
            phone=phone,
            name=name,
            **extra_fields
        )
        return user