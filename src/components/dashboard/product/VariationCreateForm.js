import { Box, Button, TextField } from '@material-ui/core';

const categoryOptions = [
    {
        label: '2º Via de Certidão de Nascimento',
        value: 'Shirts'
      },
      {
        value: 'Phones',
        label: '2º Via de Certidão de Casamento'
      },
      {
        value: 'Cars',
        label: '2º Via de Certidão de Óbito'
      },
      {
        value: 'Cars',
        label: 'Certidão de Inteiro Teor de Nascimento'
      },
      {
        value: 'Cars',
        label: 'Certidão de Inteiro Teor de Casamento'
      },
      {
        value: 'Cars',
        label: 'Certidão de Inteiro Teor de Óbito'
      },
      {
        value: 'Cars',
        label: 'Certidão de Imóvel'
      },
      {
        value: 'Cars',
        label: 'Certidão de Protesto'
      },
];

const Form12 = () => (
  <Box
    sx={{
      backgroundColor: 'background.paper',
      minHeight: '100%',
      p: 3
    }}
  >
    <Box
      sx={{
        pb: 3,
        pt: 2,
        px: 2
      }}
    >
      <form onSubmit={(event) => event.preventDefault()}>
        <TextField
          fullWidth
          label="Produto"
          name="category"
          select
          SelectProps={{ native: true }}
          variant="outlined"
        >
          {categoryOptions.map((category) => (
            <option
              key={category.value}
              value={category.value}
            >
              {category.label}
            </option>
          ))}
        </TextField>
        <Box sx={{ mt: 2 }}>
          <TextField
            fullWidth
            label="Código da Variação"
            name="productCode"
            variant="outlined"
          />
        </Box>
        <Box sx={{ mt: 2 }}>
          <TextField
            fullWidth
            label="Nome da Variação"
            name="productSku"
            variant="outlined"
          />
        </Box>
        <Button
          color="primary"
          sx={{ mt: 2 }}
          type="submit"
          variant="contained"
        >
          Criar Variação
        </Button>
      </form>
    </Box>
  </Box>
);

export default Form12;
