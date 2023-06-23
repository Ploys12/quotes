import React, { useState } from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import Quote from './Quoute';

const quotes = [
  { text: 'Логика может привести Вас от пункта А к пункту Б, а воображение — куда угодно.', author: 'Альберт Эйнштейн' },
  { text: 'Настоящая ответственность бывает только личной.', author: 'Фазиль Искандер' },
  { text: 'Наука — это организованные знания, мудрость — это организованная жизнь', author: 'Иммануил Кант' },
  { text: 'Не важно, сколько раз ты падаешь, важно, сколько раз ты поднимаешься.', author: 'Мэрилин Монро' },
  { text: 'Большинство людей тратят большую часть времени на то, чтобы быть несчастными из-за того, чего у них нет, вместо того, чтобы наслаждаться тем, что у них есть.', author: 'Джеймс Дашнер' },
  { text: 'Ничто не поможет выиграть сражение так, как добрый план', author: 'Сунь Цзы' },
  { text: 'Искусство быть собой - это лучшее искусство', author: 'Оскар Уайльд' },
  { text: 'Какой бы ветер не дул вокруг тебя, зажги свою свечу и иди дальше.', author: 'Опра Уинфри' },
  { text: 'Ты не можешь изменить свою прошлую, но ты можешь изменить свою будущую.', author: 'Элизабет Тейлор' },
  { text: 'Жизнь - это то, что с тобой происходит, пока ты строишь планы.', author: 'Джон Леннон' },
  { text: 'Единственное, что стоит делать с идеалами, - это расти на них.', author: 'Альфред Адлер' },
  { text: 'Возможности почти всегда велики, а возможности почти всегда упускаются.', author: 'Хамфри Богарт' },
  { text: 'Будь собой, все остальные роли уже заняты.', author: 'Оскар Уайльд' },
  { text: 'Секрет успеха - это знать, куда обратиться за помощью.', author: 'Жан Жак Руссо' },
  { text: 'Иногда все, что вам нужно, - это отличное приключение, которое отвлечет вас от жизни.', author: 'Эдуардо Андерсон' },
  
];

const QuoteGenerator = () => {
  const [quote, setQuote] = useState(null);

  const generateRandomQuote = () => {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    setQuote(quotes[randomIndex]);
  };

  return (
    <View style={styles.container}>
      {quote ? (
        <Quote text={quote.text} author={quote.author} />
      ) : (
        <Text style={styles.noQuoteText}>Нажмите кнопку, чтобы сгенерировать цитату</Text>
      )}
      <TouchableOpacity style={styles.button} onPress={generateRandomQuote}>
        <Text style={styles.buttonText}>Сгенерировать цитату</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  noQuoteText: {
    fontSize: 18,
    textAlign: 'center',
    marginBottom: 20,
  },
  button: {
    backgroundColor: 'blue',
    padding: 10,
    borderRadius: 5,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default QuoteGenerator;
