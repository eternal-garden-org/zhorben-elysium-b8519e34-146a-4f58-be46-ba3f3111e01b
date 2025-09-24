import { Typography } from "@/components/ui/typography";
import { Badge } from "@/components/ui/badge";
import { Container } from "@/components/container";
import { MapPin } from "lucide-react";
import Image from "next/image";

interface MemorialHeroSectionProps {
  fullName: string;
  firstName: string;
  lastName: string;
  middleName: string;
  birthDate: string;
  deathDate: string;
  yearsLived: string;
  ageAtDeath: number;
  birthPlace: string;
  deathPlace: string;
  mainImageUrl: string;
  backgroundImageUrl: string;
}

export function MemorialHeroSection({
  fullName,
  firstName,
  lastName,
  middleName,
  birthDate,
  deathDate,
  yearsLived,
  ageAtDeath,
  birthPlace,
  deathPlace,
  mainImageUrl,
  backgroundImageUrl,
}: MemorialHeroSectionProps) {
  // Функция для форматирования даты
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    const months = [
      'января', 'февраля', 'марта', 'апреля', 'мая', 'июня',
      'июля', 'августа', 'сентября', 'октября', 'ноября', 'декабря'
    ];
    const day = date.getDate();
    const month = months[date.getMonth()];
    const year = date.getFullYear();
    return `${day} ${month} ${year}`;
  };

  const formattedBirthDate = formatDate(birthDate);
  const formattedDeathDate = formatDate(deathDate);
  const birthYear = new Date(birthDate).getFullYear();
  const deathYear = new Date(deathDate).getFullYear();

  return (
    <section
      className="relative w-full bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: `url(${backgroundImageUrl})`,
      }}
    >
      {/* Темный оверлей для улучшения читаемости текста */}
      <div className="absolute inset-0 bg-black/40" />
      
      <Container className="relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 py-12 lg:py-16">
          {/* Левая часть - Фотография */}
          <div className="flex justify-center lg:justify-start">
            <div className="relative">
              <Image
                src={mainImageUrl}
                alt={`Фотография ${fullName}`}
                width={480}
                height={480}
                className="w-full max-w-[480px] h-auto aspect-square object-cover rounded-lg"
                priority
              />
            </div>
          </div>

          {/* Правая часть - Информация */}
          <div className="flex flex-col justify-between min-h-[480px] text-left">
            {/* Верхний блок - ФИО и годы жизни */}
            <div className="space-y-1">
              {/* Имя */}
              <Typography.H1
                className="text-white font-bold text-4xl leading-tight"
              >
                {firstName}
              </Typography.H1>
              
              {/* Отчество и фамилия */}
              <Typography.H1
                className="text-white font-bold text-4xl leading-tight"
              >
                {middleName} {lastName}
              </Typography.H1>
              
              {/* Бейджик с возрастом */}
              <div className="mt-10">
                <Badge
                  className="text-[#1F1F1F] font-normal text-base px-4 py-2 rounded-full"
                  style={{ backgroundColor: '#F6B95A' }}
                >
                  {ageAtDeath} лет
                </Badge>
              </div>
              
              {/* Даты рождения и смерти */}
              <div className="mt-5 space-y-1">
                <Typography.P className="text-white font-bold text-xl leading-tight">
                  <span className="font-bold">{birthYear}</span>
                  <span className="text-[#8B8B8B] font-light ml-2">{formattedBirthDate}</span>
                  <span className="text-white font-bold mx-3">–</span>
                  <span className="font-bold">{deathYear}</span>
                  <span className="text-[#8B8B8B] font-light ml-2">{formattedDeathDate}</span>
                </Typography.P>
              </div>
            </div>

            {/* Нижний блок - Места рождения и смерти */}
            <div className="space-y-6">
              {/* Место рождения */}
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-[#8B8B8B]" />
                  <Typography.P className="text-[#8B8B8B] text-sm font-normal">
                    Место рождения
                  </Typography.P>
                </div>
                <Typography.P className="text-white text-xl font-bold">
                  {birthPlace}
                </Typography.P>
              </div>

              {/* Место смерти */}
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-[#8B8B8B]" />
                  <Typography.P className="text-[#8B8B8B] text-sm font-normal">
                    Место смерти
                  </Typography.P>
                </div>
                <Typography.P className="text-white text-xl font-bold">
                  {deathPlace}
                </Typography.P>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}