import styled from "styled-components";
const Container = styled.div`
  padding: 2rem;
  max-width: 1200px;
  margin: 0 auto;
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1rem;
`;

const Title = styled.h1`
  font-size: 2rem;
  font-weight: bold;
`;

const ProductCount = styled.span`
  background-color: #e0f7fa;
  color: #00796b;
  padding: 0.5rem 1rem;
  border-radius: 1rem;
`;

const Content = styled.div`
  display: flex;
  gap: 2rem;
`;

const Sidebar = styled.div`
  width: 20%;
`;

const StickyCart = styled.div`
  position: sticky;
  top: 1rem;
`;

const ProductGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
  width: 80%;
`;

const ProductCard = styled.div`
  background: #fff;
  padding: 1rem;
  border-radius: 0.5rem;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease-in-out;
  &:hover {
    box-shadow: 0 4px 16px rgba(0, 0, 0, 0.15);
  }
`;

const ProductInfo = styled.div`
  margin-bottom: 1rem;
`;

const ProductID = styled.span`
  position: absolute;
  top: 1rem;
  right: 1rem;
  background-color: #e3f2fd;
  padding: 0.25rem 0.75rem;
  border-radius: 0.25rem;
  font-size: 0.75rem;
  color: #1e88e5;
`;

const ProductImage = styled.img`
  width: 100%;
  height: 12rem;
  object-fit: contain;
`;

const ProductTitle = styled.h2`
  font-size: 1.25rem;
  font-weight: bold;
`;

const ProductDescription = styled.p`
  color: #757575;
`;

const ProductPrice = styled.p`
  font-size: 1.5rem;
  font-weight: bold;
  color: #1976d2;
`;

const ProductCategory = styled.span`
  display: block;
  background-color: #f1f8e9;
  color: #388e3c;
  padding: 0.25rem 0.5rem;
  border-radius: 0.25rem;
  font-size: 0.75rem;
`;

const AddToCartButton = styled.button`
  width: 100%;
  background-color: #1976d2;
  color: #fff;
  padding: 0.75rem;
  border-radius: 0.5rem;
  cursor: pointer;
  &:hover {
    background-color: #1565c0;
  }
`;

const Pagination = styled.div`
  display: flex;
  justify-content: center;
  gap: 1rem;
  margin-top: 2rem;
`;

const PaginationButton = styled.button`
  padding: 0.75rem 1.5rem;
  border-radius: 0.5rem;
  cursor: pointer;
  background-color: ${({ active }) => (active ? "#1976d2" : "#e0e0e0")};
  color: ${({ active }) => (active ? "#fff" : "#000")};
  &:disabled {
    opacity: 0.5;
  }
`;

const ErrorContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
`;

const ErrorMessage = styled.div`
  color: red;
  font-size: 1.5rem;
`;
