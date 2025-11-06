export const getImageUrl = (path) => {
  // Si la ruta ya empieza con http o https, la dejamos como está
  if (path.startsWith('http')) return path;
  
  // Eliminamos ../ del inicio si existe
  const cleanPath = path.replace(/^\.\.\//, '');
  
  // En desarrollo usamos la ruta normal, en producción agregamos el base path
  const basePath = import.meta.env.DEV ? '' : '/EarendelFood';
  
  return `${basePath}/${cleanPath}`;
};