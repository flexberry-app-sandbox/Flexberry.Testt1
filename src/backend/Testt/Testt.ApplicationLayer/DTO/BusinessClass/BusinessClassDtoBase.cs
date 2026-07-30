namespace Testt.ApplicationLayer.DTO.BusinessClass
{
    using System;
    using Testt;

    /// <summary>
    /// Базовое DTO для BusinessClass.
    /// </summary>
    public class BusinessClassDtoBase
    {
        /// <summary>
        /// Id.
        /// </summary>
        public Guid Id { get; set; }

        /// <summary>
        /// Заполняет ДТО данными из переданного объекта.
        /// </summary>
        /// <param name="source">Объект с данными.</param>
        /// <returns>Полученное ДТО.</returns>
        public virtual BusinessClassDtoBase FillFromClass(BusinessClass source)
        {
            throw new NotImplementedException();
        }

        /// <summary>
        /// Заполняет переданный объект данными из ДТО.
        /// </summary>
        /// <param name="destination">Объект для обновления.</param>
        public virtual void UpdateFromDto(BusinessClass destination)
        {
            throw new NotImplementedException();
        }
    }
}
