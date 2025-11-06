export const getPublicUrl = (path) => {
  // Si la ruta ya empieza con http o https, la dejamos como está
  if (path.startsWith('http')) return path;
  
  // Eliminamos ../ o / del inicio si existe
  const cleanPath = path.replace(/^(\.\.\/|\/)/g, '');
  
  // En desarrollo usamos la ruta normal, en producción agregamos el base path
  const basePath = import.meta.env.DEV ? '' : '/EarendelFood';
  
  return `${basePath}/${cleanPath}`;
};

// Alias para mantener compatibilidad
export const getImageUrl = getPublicUrl;