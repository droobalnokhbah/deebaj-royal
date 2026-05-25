import { ProductCard } from '@/components/commerce/ProductCard';
import { Container } from '@/components/ui/Container';
import { Section } from '@/components/ui/Section';
import { PRODUCTS } from '@/data/products';

type PageProps = {
  params: { locale: string };
};

export default function ShopPage({ params }: PageProps) {
  const isArabic = params.locale === 'ar';

  return (
    <Container>
      <Section
        eyebrow={isArabic ? 'المنتجات' : 'Shop'}
        title={isArabic ? 'مجموعة ديباج رويال' : 'The Deebaj Royal collection'}
        description={
          isArabic
            ? 'تصنيف هادئ وواضح للمنتجات، بعيد عن الازدحام والعروض الصاخبة، ليبقى التركيز على الجودة والملمس والتجربة.'
            : 'A calm product listing that avoids clutter and keeps the focus on quality, texture, and experience.'
        }
      >
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {PRODUCTS.map((product) => (
            <ProductCard key={product.id} product={product} locale={params.locale} />
          ))}
        </div>
      </Section>
    </Container>
  );
}
