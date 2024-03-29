from django.contrib import admin
from django.urls import path, re_path
from notes import views
from django.conf import settings
from django.conf.urls.static import static


urlpatterns = [
    path('admin/', admin.site.urls),
    re_path(r'^api/notes/$', views.notes_list),
    re_path(r'^api/notes/(\d+)$', views.notes_detail),
] + static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)